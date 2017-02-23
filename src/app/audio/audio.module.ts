import {
    ModuleWithProviders,
    NgModule,
    Optional,
    SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from './audio.service';
import { AudioStudioComponent } from './studio/audio-studio.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ CommonModule, SharedModule ],
    declarations: [ AudioStudioComponent ],
    exports: [ AudioStudioComponent ],
    providers: [ AudioService ]
})
export class AudioModule {
    constructor(
        @Optional() @SkipSelf() parentModule: AudioModule) {
        if (parentModule) {
            throw new Error(
                'AudioModule is already loaded. Import it in the AppModule only');
        }
    }
}
