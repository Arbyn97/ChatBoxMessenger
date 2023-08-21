import { BsEmojiAngry ,
    BsEmojiExpressionless,
    BsEmojiFrown,
    BsEmojiHeartEyes,
    BsEmojiKiss,
    BsEmojiLaughing,
    BsEmojiNeutral,
    BsEmojiSmile,
    BsEmojiSmileUpsideDown,
    BsEmojiSunglasses,
    BsEmojiWink,
    BsHandThumbsUp,
    BsHeartFill,
    BsHandThumbsDown,
    BsFillMicFill
} from "react-icons/bs";
import {useState} from 'react'
const Stickers = ({recive}) => {

    const [sticker,sendSticker]=useState([]);

   
    recive(sticker);

    
    const emojies=[<BsEmojiAngry id='1' name="aa"/>,
        <BsEmojiExpressionless  id='2' />,
        <BsEmojiFrown id='3'/>,
        <BsEmojiHeartEyes  id='4'/>,
        <BsEmojiKiss id='5'/>,
        <BsEmojiLaughing  id='6'/>,
        <BsEmojiNeutral  id='7'/>,
        <BsEmojiSmile  id='8'/>,
        <BsEmojiSmileUpsideDown  id='9'/>,
        <BsEmojiSunglasses  id='10'/>,
        <BsEmojiWink  id='11'/>,
        <BsHandThumbsUp  id='12'/>,
        <BsHandThumbsDown  id='13'/>,
        <BsHeartFill  id='14'/>];
        // const sendEmojie=emojies.map((item)=><span onClick={(e)=>{sendSticker(item)}}>{item}</span>)
        const sendEmojie=emojies.map((item)=><span onClick={(e)=>{sendSticker(item)}}>{item}</span>)
        
    return ( 
<>
<div>
     
    {sticker}
{sendEmojie}


</div>

</>

     );
}
 
export default Stickers;