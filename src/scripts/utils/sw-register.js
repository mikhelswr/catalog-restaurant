import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  alert('Service Worker gagal');
  console.log('Service worker not supported in this browser');
};

export default swRegister;
