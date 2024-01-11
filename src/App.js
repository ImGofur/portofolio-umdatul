import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="content-wrapper">
  <header class="header header--bg">
    <div class="container">
      <nav class="navbar">
       <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          </button>
          <a class ="navbar-brand" href="#">PORTOFOLIO</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
          </ul>
        </div>
      </nav>
      <div class="header__content text-center">
        <span class="header__content__block">HALLO SAYA UMDATUL KHOIROH</span>
        <h1 class="header__content__title">Saya adalah murid dari Smkn 6 Jember jurusan Rekayasa perangkat lunak</h1>
        <ul class="header__content__sub-title">
        </ul>
        
      </div>
      <div class="social-icon pull-right">
      </div>
    </div>
  </header>

  <section class="about">
    <div class="container about__container--narrow">
      <div class="page-section">
        <h2 class="page-section__title">ABOUT</h2>
          <img class="page-section__title-style" src="assets/images/title-style.png" alt="" />
          <p class="page-section__paragraph">SAYA UMDATUL KHOIROH SAYA BESEKOLAH DI SMKN 06 JEMBER DAN MEMASUKI JURUSAN REKAYASA LUNAK SEKARANG SAYA SUDAH KELLAS XII RPL 2 DAN TAHUN INI AKAN LULUS DOA SAYA SEMOGA SAYA LULUS SEKOLAH AMINNNNN </p>
          <div class="row gutters-80">
            <div class="col-md-4">
              <div class="about__image">
                <img src="assets/images/umdatul.jpg" width={400} alt="" />
              </div>
            </div>
            <div class="col-md-8 about__content">
              <p class="about__description">ASAL SEKOLAH</p>
              <p class="about__description">1. TK BHAYANGKARI</p>
              <p class="about__description">2. SDN TANGGUL WETAN 02</p>
              <p class="about__description">3. SMPN 02 TANGGUL</p>
              <p class="about__description">4. SMKN 6 JEMBER</p>
              <div class="row row--margin-top">
                <div class="col-md-4">
                  <p class="about__bio"><strong>NAMA :</strong> UMDATUL KHOIROH</p>
                  <p class="about__bio"><strong>UMUR :</strong> 18 Tahun</p>
                </div>
                <div class="col-md-4">
                  <p class="about__bio"><strong>KELAHIRAN :</strong> 30 OKTOBER 2005</p>
                  <p class="about__bio"><strong>KOTA :</strong> JEMBER,JAWA TIMUR</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  <footer class="footer footer--bg">
    <div class="container text-center">
      <h1 class="footer__title">UMDATUL KHOIROH</h1>
      <ul class="footer__contact-information">
        <li><a href="tel:5555555555"><i class="material-icons">phone</i> 082334******</a></li>
        <li><a href="mailto:sshariar458@gmail.com"><i class="material-icons">email</i> umdatulkhoiroh323@gmail.com</a></li>
        <li><a href="#"><i class="material-icons">location_on</i> Tanggul Wetan</a></li>
      </ul>
    </div>
    {/* <hr style={{"border: 0;border-top: 1px solid #525B60;display:block;margin-top: 40px;"}} /> */}
    <div class="container text-center">
      <div class="social-icon">

      </div>
    </div>
  </footer>
</div></div>
  );
}

export default App;
