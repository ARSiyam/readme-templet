const Box=document.getElementById('box')
    Box.style.backgroundColor='rgb(250, 204, 212)'
    Box.style.height='80vh'
const Body=document.getElementsByTagName('body');
for (const fullbody of Body) {
    fullbody.style.margin='0'
    fullbody.style.padding='0'
}


const menBoxs = document.getElementsByClassName('menu-box');
for (const menBox of menBoxs) {
     menBox.style.display = 'flex';
     menBox.style.justifyContent = 'center';
     menBox.style.alignItems  = 'center';
     menBox.style.backgroundColor  = 'rgb(250, 204, 212)';
     menBox.style.borderBottom = '1px solid black';


}

const logoImg=document.getElementById('logo-img');
    logoImg.style.width="100px"
    logoImg.style.height="50px"

const Menu=document.getElementById('menu');
    Menu.style.display='flex';


const li=document.getElementsByTagName('li');
for (const list of li) {
    list.style.listStyleType='none'
    list.style.margin='5px 20px'
}

const singButton=document.getElementById('sing')
    singButton.style.color='rgb(255, 153, 0)'
    singButton.style.background='transparent'
    singButton.style.border='transparent'
    singButton.style.padding='5px 10px'

const creatButton=document.getElementById('creat');
    creatButton.style.padding='5px 10px'
    creatButton.style.borderRadius='1000px'
    creatButton.style.backgroundColor='gold'
    creatButton.style.padding='5px 10px'

const mainBox=document.getElementsByClassName('main-box')
for (const main_box of mainBox) {
    main_box.style.display='flex';
    main_box.style.width='80%';
    main_box.style.margin='0 auto';
    main_box.style.paddingTop='80px';
  

}

const boxes=document.getElementsByClassName('boxes');
for (const flexbox of boxes) {
    flexbox.style.width='50%';
    flexbox.style.padding='20px';
    flexbox.style.margin='20px';

}

const Img=document.getElementById('img');
    Img.style.width='500px';

const hedar1=document.getElementsByTagName('h1');
for (const h1 of hedar1) {
    h1.style.fontSize='50px'

}   
const hedar6=document.getElementsByTagName('h6');
for (const h6 of hedar6) {
    h6.style.fontSize='15px'

} 
const Search=document.getElementById('search');
      Search.style.backgroundColor='white';
      Search.style.width='220px';

  
const serchInput=document.getElementById('searc-text');
    serchInput.style.border='none';
    serchInput.style.outline='none';
    serchInput.style.height='30px';
    serchInput.style.width='180px';

const serchIcon=document.getElementById('serch-icon');
         serchIcon.style.width='30px'
         serchIcon.style.height='30px'
         serchIcon.style.border='none'
         serchIcon.style.marginLeft='2px'
         serchIcon.style.backgroundColor='red'

const cardMenbox=document.getElementById('card-menbox');
     cardMenbox.style.backgroundColor=' rgba(148, 188, 248, 0.904)'
const CardBox=document.getElementById('card-box')
    CardBox.style.width='80%'
    CardBox.style.margin='0 auto'


const SeeMore=document.getElementById('semore-lerning');
    SeeMore.style.display='flex';
    SeeMore.style.justifyContent='space-between'
    SeeMore.style.alignItems='center'



const Hedar3=document.getElementById('heder3');
    Hedar3.style.fontSize='25px'

const moreButton=document.getElementById('morebutton');
    moreButton.style.padding='5px'
    moreButton.style.backgroundColor='red'
    moreButton.style.color='white'

const Card=document.getElementById('card');
    Card.style.display='flex'
    Card.style.justifyContent='center'

const Crads=document.getElementsByClassName('crads');
for (const cardDiv of Crads) {
    cardDiv.style.backgroundColor='white'
    cardDiv.style.width='350px'
    cardDiv.style.padding='10px'
    
}
const Cardmedel=document.getElementById('cardmedel');
Cardmedel.style.margin='0 50px 0 50px'
 
    

const imgCard1=document.getElementById('cards-img1')
    imgCard1.style.width='350px'
    imgCard1.style.height='250px'

const imgCard2=document.getElementById('cards-img2')
    imgCard2.style.width='350px'
    imgCard2.style.height='250px'

const imgCard3=document.getElementById('cards-img3')
    imgCard3.style.width='350px'
    imgCard3.style.height='250px'

const buttomDivs=document.getElementsByClassName('buttom-divs')
  for (const comment of buttomDivs) {
     comment.style.display='flex'
     comment.style.justifyContent='center'
     comment.style.color='red'

  }

  const Buttom=document.getElementsByClassName('buttom')
  for (const commentbtn of Buttom) {
    commentbtn.style.margin='10px 30px 10px 30px'
  

  }

  const buttomHeder=document.getElementById('buttom-heder');
        buttomHeder.style.display='flex'
        buttomHeder.style.justifyContent='space-between'