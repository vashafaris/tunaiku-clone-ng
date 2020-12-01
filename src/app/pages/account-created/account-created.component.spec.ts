import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MSiteWrapperModule } from 'src/app/shared/components/m-site-wrapper/m-site-wrapper.module';

import { AccountCreatedComponent } from './account-created.component';

describe('AccountCreatedComponent', () => {
  let component: AccountCreatedComponent;
  let fixture: ComponentFixture<AccountCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MSiteWrapperModule],
      declarations: [AccountCreatedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
