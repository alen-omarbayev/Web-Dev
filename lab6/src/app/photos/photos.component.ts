import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];
  albumId!: number;

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumsService.getPhotosByAlbumId(this.albumId).subscribe(photos => {
      this.photos = photos;
    });
  }
}
