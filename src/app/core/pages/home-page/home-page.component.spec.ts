import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { ArticleService } from '../../services/article.service';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let articleServiceMock: any;
  let messageServiceMock: any;

  beforeEach(async () => {
    articleServiceMock = {
      getArticles: jasmine.createSpy('getArticles').and.returnValue(of({
        message: [],
        offset: 0,
        total_count: 0
      }))
    };

    messageServiceMock = {
      add: jasmine.createSpy('add')
    };

    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [
        { provide: ArticleService, useValue: articleServiceMock },
        { provide: MessageService, useValue: messageServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load articles on executeSearch', () => {
    component.executeSearch();
    expect(articleServiceMock.getArticles).toHaveBeenCalled();
  });

  it('should reset search parameters on resetSearch', () => {
    component.resetSearch();
    expect(component.searchQueryModel).toBe('');
    expect(component.selectedTags.length).toBe(0);
    expect(component.selectedFilter).toEqual({ name: 'Newest', value: 'dateDesc' });
    expect(articleServiceMock.getArticles).toHaveBeenCalled();
  });

  it('should load articles with correct page on paginate', () => {
    component.paginate({ page: 1 });
    expect(articleServiceMock.getArticles).toHaveBeenCalledWith('', 'dateDesc', [], 2);
  });

  it('should add tag if less than 3 tags are selected', () => {
    component.selectedTags = ['tag1', 'tag2'];
    component.addTagToSearch('tag3');
    expect(component.selectedTags.length).toBe(3);
    expect(articleServiceMock.getArticles).toHaveBeenCalled();
  });

  it('should show error message if more than 3 tags are selected', () => {
    component.selectedTags = ['tag1', 'tag2', 'tag3'];
    component.addTagToSearch('tag4');
    expect(messageServiceMock.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Error',
      detail: 'Too many tags',
    });
  });
});