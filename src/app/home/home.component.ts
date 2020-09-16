import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Point, Marker, Popup, icon } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  map: Map;
  mapOptions: MapOptions
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.mapOptions = {
      center: latLng(12.967404, 77.538426),
      zoom: 14,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
    this.addSampleMarker
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
    
  }
  private addSampleMarker() {
    const iconImg = 'assets/marker-icon.png'
    const marker = new Marker([12.967404, 77.538426])
        .setIcon(
            icon({
                iconSize: [24, 24],
                iconAnchor: [24, 24],
                iconUrl: iconImg
            }))
            .bindPopup('Hash Include Computech Pvt. Ltd.')
    marker.addTo(this.map);
}

//18.5191, 73.8568 assets/images/bunk/green.png

}

