import React, { Component } from 'react';
import { observer } from 'mobx-react/index';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableFooter,
  TableRow,
  TablePagination
} from 'material-ui';

@observer
class TournamentsList extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        {this.props.collection.map(t => {
          return (
            <Grid item xs={12} md={6} lg={4} xl={3} key={t.id}>
              <Card>
                <CardContent>
                  <Typography type="title">{t.name}</Typography>
                  <Typography>Starts at: {t.starts_at}</Typography>
                  <Typography>
                    Competitors limit: {t.competitors_limit}
                  </Typography>
                  <Typography>Status: {t.status}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
        <Table>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={this.props.count}
                rowsPerPage={12}
                rowsPerPageOptions={[12]}
                page={this.props.page - 1}
                onChangePage={this.props.onChangePage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Grid>
    );
  }
}

export default TournamentsList;