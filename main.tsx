import { createRoot } from 'react-dom/client';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';
import { Tooltip } from '@syncfusion/ej2-popups';
import { SampleBase } from './sample-base';
import ptBR from './pt-BR.json';
import {
  enableRipple,
  L10n,
  loadCldr,
  setCulture,
  registerLicense,
} from '@syncfusion/ej2-base';
import { toolbarSettings } from './helper';
registerLicense(
  'ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkJiWH1dcHdUQWBZUEI='
);
enableRipple(true);
// Carrega as linguagens dos componentes syncfusion.
L10n.load(ptBR);
setCulture('pt');

const tooltip: Tooltip = new Tooltip({
  mouseTrail: true,
  opensOn: 'Custom',
});

export class Default extends SampleBase {
  render() {
    return (
      <div>
        {/* Render the PDF Viewer */}
        <PdfViewerComponent
          id="container"
          documentPath="PDF_Succinctly.pdf"
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          toolbarSettings={toolbarSettings}
          style={{
            height: '100vh',
          }}
          interactionMode="Pan"
          isThumbnailViewOpen
          isCommandPanelOpen
          isAnnotationToolbarOpen
          hyperlinkOpenState="NewTab"
          theme={'bootstrap5-dark'}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              Annotation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
            ]}
          />
        </PdfViewerComponent>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
