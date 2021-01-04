import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { ColumnComponent } from './components/column/column.component';
import { BoardHeaderComponent } from './components/headers/board-header/board-header.component';
import { MainHeaderComponent } from './components/headers/main-header/main-header.component';
import { MainComponent } from './components/main/main.component';
import { EpicCreationComponent } from './components/modals/epic-creation/epic-creation.component';
import { ProjectCreationComponent } from './components/modals/project-creation/project-creation.component';
import { SprintCreationComponent } from './components/modals/sprint-creation/sprint-creation.component';
import { StoryCreationComponent } from './components/modals/story-creation/story-creation.component';
import { TeamManageComponent } from './components/modals/team-manage/team-manage.component';
import { UserCreationComponent } from './components/modals/user-creation/user-creation.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StartPromptComponent } from './components/start-prompt/start-prompt.component';
import { StoryComponent } from './components/story/story.component';
import { TeamManagementComponent } from './components/team-management/team-management.component';
import { UndefinedPageComponent } from './components/undefined-page/undefined-page.component';
import { LoaderInterceptor } from './interceptors/loader-interceptor.interceptor';
import { LoginRegistrationModule } from './modules/login-registration/login-registration.module';
import { MainAppModule } from './modules/main-app/main-app.module';
import { WrappersModule } from './modules/wrappers/wrappers.module';
import Effects from './redux/effects';
import Reducers from './redux/store';
import { HttpService } from './services/http.service';

@NgModule({
    declarations: [
        AppComponent,
        MainHeaderComponent,
        ColumnComponent,
        MainComponent,
        StoryComponent,
        SidebarComponent,
        TeamManagementComponent,
        ProjectManagementComponent,
        StartPromptComponent,
        BoardComponent,
        ProjectCreationComponent,
        UserCreationComponent,
        EpicCreationComponent,
        SprintCreationComponent,
        StoryCreationComponent,
        TeamManageComponent,
        UndefinedPageComponent,
        BoardHeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        DragDropModule,
        StoreModule.forRoot(Reducers, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot(Effects),
        MatIconModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSelectModule,
        LoginRegistrationModule,
        WrappersModule,
        MainAppModule,
    ],
    providers: [HttpService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {}
}
