import Image from 'next/image';

const ExamplePage = () => {
  return (
    <div className='box-step'>
      <div className='card'>
        <div className='box-heading'>
          <div className='step'>
            <p className='text'>STEP</p>
            <p className='num'>1</p>
          </div>
          <p className='title'>申し込み</p>
        </div>
        <figure className='image-next'>
          <Image
            src='/image/img_apply_01.jpg'
            alt='STEP1 申し込み'
            width={622}
            height={480}
            sizes='100vw'
            style={{
              width:'100%',
              height:'auto'
            }}
          />
        </figure>
        <p className='text'>
          <a
            className='link'
            href='https://yakage.bikerentals.co.jp/rentalbike_pretop'
            target='_blank'
            rel='noreferrer'
          >
            こちら
          </a>
          からお申込。
          <br />
          ご利用日とご利用台数をお選びください。
          <br />
          料金はwebサイトで事前支払のほか当日に現金、PayPayでの支払がお選びいただけます。
          <br />
          ※e-Bikeの台数には限りがございます。お早めの予約をおすすめします。
        </p>
      </div>
      <div className='card'>
        <div className='box-heading'>
          <div className='step'>
            <p className='text'>STEP</p>
            <p className='num'>2</p>
          </div>
          <p className='title'>受け取り</p>
        </div>
        <figure className='image'>
          <img
            src='/image/img_apply_02.jpg'
            loading='lazy'
            alt='STEP2 受け取り'
          />
        </figure>
        <p className='text'>
          9:00〜12:00の間のご予約時間に「道の駅
          山陽道やかげ宿」までお越しください。
          <br />
          受付でチケットやモンベルのタンブラーを受け取ったら、自由にペダルを漕ぎだして矢掛のお楽しみください！
          <br />
          おすすめのサイクリングコースを
          <a
            className='link'
            href='https://yakage-km.jp/cycling'
            target='_blank'
            rel='noreferrer'
          >
            こちら
          </a>
          から見ることもできます。
        </p>
      </div>
      <div className='card'>
        <div className='box-heading'>
          <div className='step'>
            <p className='text'>STEP</p>
            <p className='num'>3</p>
          </div>
          <p className='title'>ご返却</p>
        </div>
        <figure className='image'>
          <img
            src='/image/img_apply_03.jpg'
            loading='lazy'
            alt='STEP3 ご返却'
          />
        </figure>
        <p className='text'>
          自転車は17:00までに返却となります。安全運転で「道の駅
          山陽道やかげ宿」までお戻りください。カギの返却、車体チェックを受けて終了です。
        </p>
      </div>
    </div>
  );
};

export default ExamplePage;
