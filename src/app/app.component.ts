import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Blog';

  date = new Date();
  public loveIts = 10;

  listesPosts  = [
    {
      title:"Mon premier Post",
      content:"lorem ipsun le mokai pros",
      loveIts:12,
      created_at: new Date()
    },
    {
      title:"Mon dexième Post",
      content:"lorem ipsun ya la frome",
      loveIts:-1,
      created_at: new Date()
    },
    {
      title:"Mon trosième Post",
      content:"lorem ipsun le super pros",
      loveIts:0,
      created_at: new Date()
    }

  ];

}
