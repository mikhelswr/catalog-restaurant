import DaftarRestoran from '../views/pages/daftar-restoran';
import RestoranFavorit from '../views/pages/restoran-favorit';
import DetailRestoran from '../views/pages/detail-restoran';

const routes = {
  '/': DaftarRestoran,
  '/explore': DaftarRestoran,
  '/favorite': RestoranFavorit,
  '/detail/:id': DetailRestoran,
};

export default routes;
