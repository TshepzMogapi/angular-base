import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Store, StoreModule } from "@ngrx/store";
import { LoginComponent } from "./login.component";
import * as fromApp from "../store/app.reducer";
import { User } from "../shared/user.model";
import * as LoginActions from "../login/store/login.actions";

describe("LoginComponent Unit Test", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store<fromApp.AppState>;

  let testUser: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [StoreModule.forRoot(fromApp.appReducer), ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // testUser
  }));

  it("successfully created component", () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it("Initial component state", () => {
    expect(component.loginForm).toBeDefined();
  });

  it("Form Should still be invalid onSubmit", () => {
    component.onSubmit();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it("Form Valid after Enter Username and Password", () => {
    store.dispatch(
      new LoginActions.EnterUsernamePassword(
        new User("tshepzmogapi@gmail.com", "Password468")
      )
    );
    store.select("login").subscribe((userState) => {
      component.loginForm.controls['username'].setValue(userState.user.email);
      component.loginForm.controls['password'].setValue(userState.user.password)
    });
    expect(component.loginForm.valid).toBeTruthy();
  });
});
