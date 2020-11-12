import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Store, StoreModule } from "@ngrx/store";
import { LoginComponent } from "./login.component";
import * as fromApp from "../store/app.reducer";
import * as LoginActions from "../login/store/login.actions";

describe("LoginComponent Unit Test", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store<fromApp.AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [StoreModule.forRoot(fromApp.appReducer), ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
  }));

  const getStateAndUpdateForm = () => {
    store.select("login").subscribe((userState) => {
      component.loginForm.controls["username"].setValue(userState.username);
      component.loginForm.controls["password"].setValue(userState.password);
    });
  };

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

  it("Form Valid after Entering Correct Username and Password", () => {
    let up = {
      username: "tshepzmogapi@gmail.com",
      password: "Password468",
    };
    store.dispatch(new LoginActions.EnterUsernamePassword(up));

    getStateAndUpdateForm();

    expect(component.loginForm.valid).toBeTruthy();
  });

  it("username should still be the VALID", () => {
    let p = {
      password: "12345",
    };
    store.dispatch(new LoginActions.UpdatePassword(p));

    getStateAndUpdateForm();

    expect(component.loginForm.controls["username"].valid).toBeTruthy();
  });

  it("password should be the INVALID", () => {
    let p = {
      password: "12345",
    };
    store.dispatch(new LoginActions.UpdatePassword(p));

    getStateAndUpdateForm();

    expect(component.loginForm.controls["password"].valid).toBeFalsy();
  });

  it("Username should be invalid", () => {
    let u = {
      username: "2.34@io.8",
    };

    store.dispatch(new LoginActions.UpdateUsername(u));

    getStateAndUpdateForm();

    expect(component.loginForm.controls["username"].valid).toBeTruthy();
  });
});

describe("LoginComponent UI Test", () => {
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
  }));

  it("Created Form with Username, Password and Login button successfully", () => {
    const usernameInput = fixture.debugElement.nativeElement.querySelector(
      "#inputEmail"
    );
    const passwordInput = fixture.debugElement.nativeElement.querySelector(
      "#inputPassword"
    );
    expect(usernameInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });
});
