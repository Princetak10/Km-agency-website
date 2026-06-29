const https = require('https');
const fs = require('fs');
const urls = [
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1583391733958-d2597280170a?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=82',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?auto=format&fit=crop&w=1000&q=82',
];
async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(url, res.status);
    } catch (e) {
      console.log(url, 'Error');
    }
  }
}
check();
