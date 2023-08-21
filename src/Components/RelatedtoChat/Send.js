import {BsFillMicFill,BsFolderSymlink,BsSend} from 'react-icons/bs'
import {useState} from 'react'
import Stickers from '../RelatedtoChat/Stickers';
import SendMessages from '../RelatedtoChat/ChatMessenger'
const Send = () => {

   const [sendSticker,setSendSticker]=useState([])
     
    return ( 
<>
<div>
            <Stickers recive={setSendSticker}/>
            <SendMessages send={sendSticker}/>

            <BsFolderSymlink/>
            <BsFillMicFill/>
            <div>
                {sendSticker}
            </div>
</div>

</>

     );
}
 
export default Send;