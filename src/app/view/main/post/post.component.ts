import { Component, OnInit } from '@angular/core';
import {DummyService} from '../../../model/dummy.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
post: Post;
  constructor(private blog: DummyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      pm => this.getPost(pm.get('id')));
  }

  getPost(id): void {
    this.blog.getPostById(id).subscribe(
      res => {
        if (res) {
          this.post = res;
        } else {
          this.router.navigateByUrl('/error');
        }
      }
    );
  }
    }
