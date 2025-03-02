import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../services/albums.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: 'album-detail.component.html',
  styleUrl: 'album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  editedTitle : string = '';

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumById(albumId).subscribe(album => {
      this.album = album;
    });
  }

  saveTitle(){
    if (this.album){
      this.album.title = this.editedTitle;
      alert('The title has been changed succesfully!');
    }
  }

  goBack() {
    window.history.back();
  }
}
