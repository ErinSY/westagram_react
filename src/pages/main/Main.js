import React from 'react';
import './Main.scss';

function Nav() {
  return (
    <header className='flex header'>
      <div className='inner flex'>
        <div className='header_left flex'>
          <img
            className='img'
            src='https://cdn-icons-png.flaticon.com/512/1384/1384031.png'
            alt='logo'
          />
          <img
            className='img'
            src='https://cdn-icons-png.flaticon.com/512/7500/7500298.png'
            alt=''
          />
          <h1>Westagram</h1>
        </div>

        <div>
          <input className='header_search' type='text' placeholder='검색' />
        </div>

        <div className='header_right'>
          <img
            className='rightop_icon img'
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png'
            alt=''
          />
          <img
            className='rightop_icon img'
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
            alt=''
          />
          <img
            className='rightop_icon img'
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png'
            alt=''
          />
        </div>
      </div>
    </header>
  );
}

function AsideLeft() {
  return (
    <aside className='aside_left'>
      <div className='feedhead flex'>
        <img
          className='profile_img img'
          src='https://images.unsplash.com/photo-1658681342224-a7a0332cf4a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt=''
        />
        <h1 className='profile_name'>erin_ha_seoyul</h1>
        <img
          className='dropdownmenu_iconimg img'
          src='image/option.png'
          alt='dropdownIcon'
        />
      </div>

      <img
        className='feedimg img'
        src='https://images.unsplash.com/photo-1658728942183-013fb53281da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        alt=''
      />

      <div className='reaction_icon_wrap flex'>
        <img
          className='reaction_iconimg img'
          src='https://cdn-icons-png.flaticon.com/512/2107/2107845.png'
          alt=''
        />
        <img className='reaction_iconimg img' src='image/reply.png' alt='' />
        <img
          className='reaction_iconimg img'
          src='https://cdn-icons-png.flaticon.com/512/3580/3580382.png'
          alt=''
        />
        <img
          className='reaction_iconimg saveicon img'
          src='https://cdn-icons-png.flaticon.com/512/84/84510.png'
          alt=''
        />
      </div>

      <div className='show_like_wrap flex'>
        <img
          className='friendProfile_img img'
          src='https://images.unsplash.com/photo-1658468851594-6f6bbeb68d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt=''
        />
        <p>
          <strong>abc_234</strong>님 <strong>외 10명</strong>이 좋아합니다
        </p>
      </div>

      <div className='feed_discription_wrap'>
        <p className='discription'>
          <strong>erin_ha_seoyul</strong> &nbsp; 배고프다....배고프다ㅏㅏ
        </p>
      </div>

      <div className='comment_list'>
        <p className='timecount'>42분전</p>
      </div>
      <form className='addcomment'>
        <input
          className='commentinputbox'
          type='text'
          placeholder='댓글 달기...'
        />
        <button className='submit button'>게시</button>
      </form>
    </aside>
  );
}

function AsideRight() {
  return (
    <aside className='aside_right'>
      <Wecode />
      <Story />
      <Recommandation />
      <Instainfo />
    </aside>
  );
}

function Wecode() {
  return (
    <div className='wecode flex'>
      <img
        className='wecode_logo img'
        src='https://velog.velcdn.com/images/inyong_pang/post/f0ea605d-c2d9-460c-aedc-a0ec77e6759f/wecode.png'
        alt=''
      />
      <p>
        <strong>wecode_bootcamp</strong>
        <br />
        <span style={{ color: '#9d9d9d' }}>WeCode | 위코드</span>
      </p>
    </div>
  );
}

function Story() {
  return (
    <div className='story'>
      <div className='top_title'>
        <p>스토리</p>
        <p>모두보기</p>
      </div>
      <div className='instagralist flex'>
        <img
          className='insta_logo img'
          src='https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          alt=''
        />
        <p>
          <strong>abab_12345</strong>
          <br />
          <span style={{ color: '#9d9d9d' }}>16분 전</span>
        </p>
      </div>
      <div className='instagralist'>
        <img
          className='insta_logo img'
          src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          alt=''
        />
        <p>
          <strong>weCode_1992</strong>
          <br />
          <span style={{ color: '#9d9d9d' }}>3시간 전</span>
        </p>
      </div>
      <div className='instagralist'>
        <img
          className='insta_logo img'
          src='https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80'
          alt=''
        />
        <p>
          <strong>bootcamp_WECode</strong>
          <br />
          <span style={{ color: '#9d9d9d' }}>20시간 전</span>
        </p>
      </div>
    </div>
  );
}

function Recommandation() {
  return (
    <div className='recommandation'>
      <div className='top_title'>
        <p>회원님을 위한 추천</p>
        <p>모두보기</p>
      </div>
      <div className='instagralist'>
        <img
          className='insta_logo img'
          src='https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          alt=''
        />
        <p>
          <strong>seoyul_0203</strong>
          <br />
          <span className='whofollow' style={{ color: '#9d9d9d' }}>
            abcabc_님 외 2명이 팔로우 합니다
          </span>
        </p>
        <button className='follow'>팔로우</button>
      </div>
      <div className='instagralist'>
        <img
          className='insta_logo img'
          src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          alt=''
        />
        <p>
          <strong>annyeongHa__</strong>
          <br />
          <span className='whofollow' style={{ color: '#9d9d9d' }}>
            wecodewecode님 외 3명이 팔로우 합니다.
          </span>
        </p>
        <button className='follow'>팔로우</button>
      </div>
      <div className='instagralist'>
        <img
          className='insta_logo img'
          src='https://media.istockphoto.com/photos/cute-terrier-dog-wearing-sunglasses-picture-id1387035098?b=1&k=20&m=1387035098&s=170667a&w=0&h=UFbN7aJy-n3QWxlgL7V1h5vzoadNDiF3wkKWqYH5mf8='
          alt=''
        />
        <p>
          <strong>dahaetda_WECode</strong>
          <br />
          <span className='whofollow' style={{ color: '#9d9d9d' }}>
            hihiwecode__ 외 5명이 팔로우 합니다.
          </span>
        </p>
        <button className='follow'>팔로우</button>
      </div>
    </div>
  );
}

function Instainfo() {
  return (
    <div className='instainfo'>
      <p>
        Instagram 정보 &middot; 지원 &middot; 홍보 &middot; 센터 &middot; API
        &middot; 채용정보 &middot; 개인정보처리방침 &middot; 약관 &middot;
        디렉터리 &middot; 프로필 &middot; 해시태그 &middot; 언어
        <br />
        <br />© 2019 INSTAGRAM
      </p>
    </div>
  );
}

const Main = () => {
  return (
    <main className='mainwrap'>
      <Nav />
      <main className='main'>
        <div className='maininner'>
          <AsideLeft />
          <AsideRight />
        </div>
      </main>
    </main>
  );
};

export default Main;