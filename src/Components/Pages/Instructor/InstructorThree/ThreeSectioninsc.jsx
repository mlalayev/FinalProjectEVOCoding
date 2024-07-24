import React from 'react'
import './ThreeSectioninsc.css'

const ThreeSectioninsc = () => {
  return (
    <div className="ThreeSectionContainerBodys">
    <div className="ThreeSectionContainer">
    <>
  <div className="left-section">
    <div className="image-section">
      <img src="meeting_image.jpg" alt="Toplantı Görseli" />
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
    <div className="countdown">
      <div className="time">
        <span className="number">130</span>
        <span className="label">Gün</span>
      </div>
      <div className="time">
        <span className="number">04</span>
        <span className="label">Saat</span>
      </div>
      <div className="time">
        <span className="number">41</span>
        <span className="label">Dakika</span>
      </div>
      <div className="time">
        <span className="number">40</span>
        <span className="label">Saniye</span>
      </div>
    </div>
    <div className="details">
      <h2>Detaylar</h2>
      <p>
        <strong>Konu:</strong> İlk Toplantı
      </p>
      <p>
        <strong>Ev Sahibi:</strong> Admin
      </p>
      <p>
        <strong>Tarih:</strong> Cumartesi, 30 Kasım 2024 23:26
      </p>
      <p>
        <strong>Süre:</strong> 1 saat 0 dakika
      </p>
      <p>
        <strong>Geçerli Saat Dilimi:</strong> Asya/Dhaka
      </p>
      <p>
        <em>Not:</em> Geri sayım saati yerel saat diliminize göre
        gösterilmektedir.
      </p>
    </div>
    <div className="buttons">
      <button className="zoom">Zoom Uygulaması ile Katıl</button>
      <button className="web">Web Tarayıcı ile Katıl</button>
      <button className="start">Toplantıyı Başlat</button>
    </div>
  </div>
</>
</div>
</div>
  )
}

export default ThreeSectioninsc;