import NOTIFICATION_HELPER from '../notification-helper';
import CONFIG from '../../globals/config';

const WEBSOCKET_INITIATOR = {
  init(url) {
    const WEBSOCKET = new WebSocket(url);
    WEBSOCKET.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);

    NOTIFICATION_HELPER.sendNotification({
      title: `${restaurant.name}`,
      options: {
        body: restaurant.description,
        image: `${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}`,
      },
    });
  },
};

export default WEBSOCKET_INITIATOR;
