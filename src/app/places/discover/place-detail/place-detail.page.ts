import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

place?:Place;

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/discover');
        return;
      }
      this.place = this.placesService.places.find(p => p.id === paramMap.get('placeId?'))
    });
  }
  onBookPlace() {
    //this.router.navigateByUrl('/places/discover')
      this.navCtrl.navigateBack('places/discover')
      //this.navCtrl.pop() este método chama a ultima pagina mas se você atualizar a pagina que você esta ela não irá retornar
   }
}


