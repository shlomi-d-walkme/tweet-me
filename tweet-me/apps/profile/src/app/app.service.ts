import { Injectable } from '@nestjs/common';
import { Profile } from './entities/profile.entity';
import { ProfileDto } from './dto/profile.dts';
import uniqid from 'uniqid';

@Injectable()
export class AppService {

  map:Profile[] = [];

  register(profileDto: ProfileDto): { id: string } {
    const id = uniqid();
    console.log(id)
    this.map.push(Profile.convertToEntity(id, profileDto));
    return { id };
  }

  getProfile(id: string): Profile {
    return this.map.find(prof => prof.id === id);
  }

  getProfiles(): Profile[] {
    return this.map;
  }

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
