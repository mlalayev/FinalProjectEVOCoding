import './LiveClass.css';
import React from 'react';
import '../Common/Root.css';
import LiveClassImg from '../../assets/liveclass.jpg';
import CountDown from '../MainPage/MainPage-CountDown/CountDown';

const LiveClass = () => {
  return (
    <div className="ThreeSectionContainerBodys">
    <div className="ThreeSectionContainer">
  <div className="left-section">
    <div className="image-section">
      <img src={LiveClassImg} alt="Toplantı Görseli" />
    </div>
    <div className="text-section">
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."
      </p>
    </div>
  </div>
  <div className="details-section">
  <b><CountDown/></b>
    <div className="details">
      <h2>Detaylar</h2>
      <p>
        <strong>Konu:</strong> <i>İlk Toplantı</i>
      </p>
      <p>
        <strong>Ev Sahibi:</strong> <i>Admin</i>
      </p>
      <p>
        <strong>Tarih:</strong> <i>Cumartesi, 30 Kasım 2024 23:26</i>
      </p>
      <p>
        <strong>Süre:</strong> <i>1 saat 0 dakika</i>
      </p>
      <p>
        <strong>Geçerli Saat Dilimi:</strong> <i>Asya/Dhaka</i>
      </p>
      <p>
        <em>Not:</em> <i>Geri sayım saati yerel saat diliminize göre
        gösterilmektedir.</i>
      </p>
    </div>
    <div className="buttons">
      <button className="zoom">Zoom Uygulaması ile Katıl</button>
      <button className="web">Web Tarayıcı ile Katıl</button>
      <button className="start">Toplantıyı Başlat</button>
    </div>
  </div>
</div>
</div>
  )
}

export default LiveClass