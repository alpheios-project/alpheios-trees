import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  MessagingService,
  ResponseMessage,
  WindowIframeDestination as Destination,
} from 'alpheios-messaging';

import ArethusaWrapper from '../ArethusaWrapper';

const config = {
  name: 'treebank',
  targetIframeID: 'string-not-used',
  targetURL: 'string-not-used',
  commModes: [Destination.commModes.RECEIVE],
};

const error = (request, message, code) => ResponseMessage.Error(request, new Error(message), code);

class TreebankService extends Component {
  constructor(props) {
    super(props);

    this.state = { redirectTo: null };
    this.arethusaLoaded = false;
    this.messageHandler = this.messageHandler.bind(this);
    this.setArethusaLoaded = this.setArethusaLoaded.bind(this)
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef 
    window.document.body.addEventListener('ArethusaLoaded',this.setArethusaLoaded)
    // eslint-disable-next-line no-undef
    this.destination = new Destination({ ...config, receiverCB: this.messageHandler });
    this.service = new MessagingService('treebank-service', this.destination);

  }

  componentWillUnmount() {
    this.destination.deregister();
    // eslint-disable-next-line no-undef
    window.document.body.removeEventListener('ArethusaLoaded',this.setArethusaLoaded);
  }

  setArethusaLoaded() {
    this.arethusaLoaded = true;
    window.clearInterval(this.interval);
  }

  messageHandler(request, responseFn) {
    const { arethusa } = this.props;
    const { body } = request;
    const [name] = Object.keys(body);

    if (this.arethusaLoaded) {
      try {
        switch (name) {
          case 'gotoSentence':
            let route = body.gotoSentence.sentenceId
            if (body.gotoSentence.wordIds) {
              route = `${route}?`;
              for (let w of body.gotoSentence.wordIds) {
	        route = `${route}&w=${w}`;
              }
            }
            this.setState({ redirectTo: route });

            responseFn(ResponseMessage.Success(request, { status: 'success' }));
            break;
          case 'getMorph':
            responseFn(ResponseMessage.Success(
              request,
              arethusa.getMorph(body.getMorph.sentenceId, body.getMorph.wordId),
            ));
            break;
          case 'refreshView':
            responseFn(ResponseMessage.Success(request, arethusa.refreshView()));
            break;
          case 'findWord':
            let args = body.findWord;
            responseFn(ResponseMessage.Success(request, arethusa.findWord(args.sentenceId,args.word,args.prefix,args.suffix)));
            break;
          default:
            responseFn(error(request,`Unsupported request: ${name}`,ResponseMessage.errorCodes.UNKNOWN_REQUEST));
        }
      } catch (err) {
        responseFn(error(request, err, ResponseMessage.errorCodes.INTERNAL_ERROR));
      }
    } else {
        responseFn(error(request, 'Arethusa is Not Loaded', ResponseMessage.errorCodes.SERVICE_UNINITIALIZED));
    }
  }

  render() {
    const { redirectTo } = this.state;

    return (
      redirectTo && <Redirect to={redirectTo} />
    );
  }
}

TreebankService.propTypes = {
  arethusa: PropTypes.instanceOf(ArethusaWrapper).isRequired,
};

export default TreebankService;