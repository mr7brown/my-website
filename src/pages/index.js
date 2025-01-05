import React from 'react';
import Layout from '@theme/Layout';
import Column from '../components/Column';
import Columns from '../components/Columns';
import Card from '../components/Card';
import CardBody from '../components/Card/CardBody';
import CardImage from '../components/Card/CardImage';
import CardFooter from '../components/Card/CardFooter';
import CardHeader from '../components/Card/CardHeader';


export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '2vh',
          fontSize: '20px',
        }}>

{/* Row 1 Start */}

{/* <Columns> 
  <Column className='text--left'>
  <Card>
    <CardImage
      cardImageUrl='img/b.png'
    />
  </Card>
  </Column>
  <Column className='text--left'>
  <Card>
    <CardImage
      cardImageUrl='img/i.png'
    />
  </Card>
  </Column>
  <Column className='text--left'>
  <Card>
    <CardImage
      cardImageUrl='img/n.png'
    />
  </Card>
  </Column>
  <Column className='text--left'>
  <Card>
    <CardImage
      cardImageUrl='img/g.png'
    />
  </Card>
  </Column>
  <Column className='text--left'>
  <Card>
    <CardImage
      cardImageUrl='img/o.png'
    />
  </Card>
  </Column>
</Columns> */}


      </div>

      <Columns> 
  <Column className='text--center'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#ff9ff3' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        <div className='avatar__intro'>
          <div className='avatar__name'>Trusk 💔</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='img/amtrak.png'
    />
    <CardFooter
     style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Seattle Amtrak</div>
        </div>
      </div>
    </CardFooter> 
  </Card>

  </Column>
  <Column className='text--center'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#ee5253' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Taylor/Travis 💍</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='img/skydiving.jpg'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Go Skydiving</div>
        </div>
      </div>
    </CardFooter> 
  </Card>

  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#10ac84' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Florida ❄️</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='img/alaska.png'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Alaska Cruise</div>
        </div>
      </div>
    </CardFooter> 
  </Card>

  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: 'rgb(33 126 209)' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Morgan Wallen Incident</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='img/yosemite.png'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Yosemite</div>
        </div>
      </div>
    </CardFooter> 
  </Card>

  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: 'rgb(33 126 209)' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>OH-IO 🏆</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://media.istockphoto.com/id/536014873/vector/ohio-state-outline.jpg?s=612x612&w=0&k=20&c=wGdELnATDfc-QaJFEr9wqU5Qxae-qZWVIL7vkYIhmpI='
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Ohio State Game</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
</Columns>
      {/* Row 1 End */}
      {/* Row 2 Start */}

      
      <div>
      <Columns> 
  <Column className='text--center'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: 'white' , color:'#eb2f06'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Trudeau Exiled</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQas6v-lRGuN3B7pPdDnxnXoivZcsLM4-oJJw&s'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Hawaii Vacation</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--center'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#1e3799' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Met Gala Scandal 👗</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JZOrsv0X010dCyZ1FiMbNUwLT2KQtHBtQw&s'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Private Tour of AMNH</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#B33771' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>New Job/Promotion</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='img/balloon.png'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Hot Air Balloon</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: 'rgb(33 126 209)' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Loki 💩 in the Hall</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://live.staticflickr.com/3813/9533981976_18c10eb33c_b.jpg'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Zepher Train</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#f8c291' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>First Civ 7 Victory</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='img/zipline.png'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Zipline</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
</Columns>
      </div>
      
      {/* Row 2 end */}
      {/* Row 3 Start */}
      
      
      <div>
      <Columns> 
  <Column className='text--center'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#5f27cd' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Aliens Confirmed 'again'</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://cdn.prod.website-files.com/5bb2cb199758ce1535f85891/674519f4889ed4f58760649b_marek-piwnicki-joxXZhefnhk-unsplash%20copy.jpg'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Atacama Desert Stars</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--center'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#10ac84' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Bankruptcy 🍔</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://i0.wp.com/morethanjustparks.com/wp-content/uploads/2021/10/national-parks-map-corrected2.jpg?w=1200&ssl=1'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>National Parks Road Trip</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: 'Gold' , color:'black'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Bills Super Bowl</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://angelapingel.com/wp-content/uploads/2012/10/Angela-Pingel-star2-1024x1024.jpeg'
    />
    <CardFooter style={{ backgroundColor: 'gold' , color:'black'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Icon of the Seas</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#3742fa' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Kamala Harris Podcast</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='img/phone.png'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Staycation w/ no phones</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#BDC581' , color:'black'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Diddy Pardon</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://media.newyorker.com/photos/60c11e82c8eec4d1031d5fe1/1:1/w_1080,h_1080,c_limit/Brody-BoBurnham.jpg'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Bo Burnham live</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
</Columns>
      </div>
      
      
      <div>
      <Columns> 
  <Column className='text--center'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#ff3838' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>New Record Heat Index</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='img/snow.png'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Ski/Snowboard</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--center'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: 'white' , color:'blue'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Mr. Beast 🤝🏻 Healthcare</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39832.png'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Dodgers game in LA</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: 'rgb(33 126 209)' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>New Health Trend</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='img/tx.png'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Texas State Fair</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#ffaf40' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>GTA 6 Delay</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://cdn.vox-cdn.com/thumbor/0PMv1-SP2lQnkUfUYFjZJuoPEwc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19411862/1183028093.jpg.jpg'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Cowboys Game</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: 'rgb(33 126 209)' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Israel ❤️ Palestine</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='img/barcelona.png'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Barcelona</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
</Columns>
      </div>
      
      
      <div>
      <Columns> 
  <Column className='text--center'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#ffcccc' , color:'black'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Lola's Surgery 🦴</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://www.krqe.com/wp-content/uploads/sites/12/2023/08/AdobeStock_190671281.jpeg'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Wolf Sanctuary</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--center'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: 'rgb(33 126 209)' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Jan 6 P2</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://maps-washington-dc.com/img/1200/washington-dc-museums-map.jpg'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>DC Museum Tour</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#6a89cc' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Ozempic Lawsuit</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://agitator.thedonorvoice.com/wp-content/uploads/2023/11/no-ragrets.jpg'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Matching Tattoo</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  <Column className='text--justify'>
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#ff6348' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>Twitter ☠️</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://assets.teenvogue.com/photos/59b9b80101f08c327283ca5e/16:9/w_2560%2Cc_limit/coco-lede.jpg'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Day of the Dead</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
  
  <Column className='text--justify'>
  
  <Card>
  <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: '#2f3542' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        
        <div className='avatar__intro'>
          <div className='avatar__name'>SpaceX to Mars</div>
        </div>
      </div>
    </CardHeader>
    <CardImage
      cardImageUrl='https://ih1.redbubble.net/image.5411938865.1005/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg'
    />
    <CardFooter style={{ backgroundColor: '#303846' , color:'white'}} className='text--center'> 
      <div className='avatar'>
        {/* <img
          className='avatar__photo avatar__photo--xs' 
          src='img/meh.png'
        /> */}
        <div className='avatar__intro'>
          <div className='avatar__name'>Tour Buffalo</div>
        </div>
      </div>
    </CardFooter> 
  </Card>
  </Column>
</Columns>
      </div>
      
      
    </Layout>
  );
}