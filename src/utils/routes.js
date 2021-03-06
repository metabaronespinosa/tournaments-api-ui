const routes = {
  root: () => '/',
  signIn: () => '/sign_in',
  signUp: () => '/sign_up',
  account: () => '/account',
  tournaments: () => '/tournaments',
  organisedTournaments: () => '/tournaments/organised',
  enlistedTournaments: () => '/tournaments/enlisted',
  newTournament: () => '/tournaments/new',
  editTournament: (id = ':id') => `/tournament/${id}/edit`,
  tournament: (id = ':id') => `/tournament/${id}`
};

export default routes;
