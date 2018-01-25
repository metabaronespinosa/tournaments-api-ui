import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Navigation from './components/navigation';
import Alert from './components/alert';
import Loading from './components/loading';
import ApiClient from './utils/api_client';
import AppStore from './stores/app_store';
import AppSwitch from './app_switch';

import fontawesome from '@fortawesome/fontawesome';
import {
  faBars,
  faSignOutAlt,
  faSpinner,
  faUserCircle
} from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faBars, faSignOutAlt, faSpinner, faUserCircle);

const apiClient = new ApiClient();
const appStore = AppStore.create({}, { apiClient });

@observer
class App extends Component {
  componentWillMount() {
    appStore.sessionStore.setup();
  }

  render() {
    return (
      <Provider store={appStore}>
        <BrowserRouter>
          <div>
            <Navigation />
            {appStore.sessionStore.state !== 'ready' ? (
              <Loading />
            ) : (
              <AppSwitch />
            )}
            <Alert />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
