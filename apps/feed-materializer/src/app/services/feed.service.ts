import { Injectable } from '@nestjs/common';
import {MessagingService} from '@tweet-me/shared/kafka-infra';
import { ActionType, TweetKafkaModel } from '@tweet-me/api-interfaces';



@Injectable()
export class FeedService {

  constructor(private messagingService:  MessagingService){
    
  }

  consume(){
    this.messagingService.consume<TweetKafkaModel>('tweets',(data) =>{console.log(data); return new Promise<void>(()=>{return null})} )
  }

  // async register(profileDto: ProfileRequest):Promise<ProfileResponse> {
  //   const profile = new ProfileModel(profileDto);
  //   await profile.save();
  //   return profile;
  // }

  // getProfile(id: string) {
  //   return ProfileModel.findById(id);
  // }

  // getProfiles() {
  //   return ProfileModel.find();
  // }

  getArt(){
    return 
    `                       _..gggggppppp.._                       
                  _.gd$$$$$$$$$$$$$$$$$$bp._                  
               .g$$$$$$P^^""j$$b""""^^T$$$$$$p.               
            .g$$$P^T$$b    d$P T;       ""^^T$$$p.            
          .d$$P^"  :$; \`  :$;                "^T$$b.          
        .d$$P'      T$b.   T$b                  \`T$$b.        
       d$$P'      .gg$$$$bpd$$$p.d$bpp.           \`T$$b       
      d$$P      .d$$$$$$$$$$$$$$$$$$$$bp.           T$$b      
     d$$P      d$$$$$$$$$$$$$$$$$$$$$$$$$b.          T$$b     
    d$$P      d$$$$$$$$$$$$$$$$$$P^^T$$$$P            T$$b    
   d$$P    '-'T$$$$$$$$$$$$$$$$$$bggpd$$$$b.           T$$b   
  :$$$      .d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._.g.     $$$;  
  $$$;     d$$$$$$$$$$$$$$$$$$$$$$$P^"^T$$$$P^^T$$$;    :$$$  
 :$$$     :$$$$$$$$$$$$$$:$$$$$$$$$_    "^T$bpd$$$$,     $$$; 
 $$$;     :$$$$$$$$$$$$$$bT$$$$$P^^T$p.    \`T$$$$$$;     :$$$ 
:$$$      :$$$$$$$$$$$$$$P \`^^^'    "^T$p.    lb\`TP       $$$;
:$$$      $$$$$$$$$$$$$$$              \`T$$p._;$b         $$$;
$$$;      $$$$$$$$$$$$$$;                \`T$$$$:Tb        :$$$
$$$;      $$$$$$$$$$$$$$$                        Tb    _  :$$$
:$$$     d$$$$$$$$$$$$$$$.                        $b.__Tb $$$;
:$$$  .g$$$$$$$$$$$$$$$$$$$p...______...gp._      :$\`^^^' $$$;
 $$$;  \`^^'T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p.    Tb._, :$$$ 
 :$$$       T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b.   "^"  $$$; 
  $$$;       \`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b      :$$$  
  :$$$        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;     $$$;  
   T$$b    _  :$$\`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;   d$$P   
    T$$b   T$g$$; :$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  d$$P    
     T$$b   \`^^'  :$$ "^T$$$$$$$$$$$$$$$$$$$$$$$$$$$ d$$P     
      T$$b        $P     T$$$$$$$$$$$$$$$$$$$$$$$$$;d$$P      
       T$$b.      '       $$$$$$$$$$$$$$$$$$$$$$$$$$$$P       
        \\\`T$$$p.   bug    d$$$$$$$$$$$$$$$$$$$$$$$$$$P'        
          \\\`T$$$$p..__..g$$$$$$$$$$$$$$$$$$$$$$$$$$P'          
            "^$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$^"            
               "^T$$$$$$$$$$$$$$$$$$$$$$$$$$P^"               
                   """^^^T$$$$$$$$$$P^^^"""\`


    `;
  }
}
