import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { inject, observer } from 'mobx-react/index';
import autobind from 'autobind-decorator';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography
} from 'material-ui';
import classNames from 'classnames';
import styles from '../../styles/modals.scss';
import RoundForm from '../../forms/round_form';
import TextInput from '../forms/text_input';

@translate()
@inject('store')
@observer
class EditRoundModal extends Component {
  componentWillMount() {
    this.form = new RoundForm();
    this.form.submitImpl = this.submitImpl;
    this.form.set({ round: this.props.round });
  }

  @autobind
  async submitImpl() {
    await this.props.round.update(this.form.values());
    this.props.store.uiStore.setAlert(this.props.t('alerts.round.update'));
    this.props.onClose();
  }

  render() {
    const { t } = this.props;

    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Card className={classNames(styles.contents, styles.small)}>
          <form onSubmit={this.form.onSubmit}>
            <CardContent>
              <Typography variant="headline">
                {t('components.modals.edit_round.title')}
              </Typography>
              <TextInput
                field={this.form.$('round.competitors_limit')}
                type="number"
                autoFocus
                required
              />
              <TextInput
                field={this.form.$('round.tables_count')}
                type="number"
                required
              />
            </CardContent>
            <CardActions>
              <Button color="primary" style={{ flex: 1 }} type="submit">
                {t('common.buttons.update')}
              </Button>
            </CardActions>
          </form>
        </Card>
      </Modal>
    );
  }
}

EditRoundModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  round: PropTypes.object.isRequired
};

export default EditRoundModal;