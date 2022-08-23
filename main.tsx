import { createRoot } from 'react-dom/client';
import '@syncfusion/ej2/bootstrap5-dark.css';
import React, { useEffect, useRef, useState } from 'react';
import {
  AllowedInteraction,
  ContextMenuItem,
  LoadFailedEventArgs,
  Annotation,
  BookmarkView,
  Inject,
  LinkAnnotation,
  Magnification,
  Navigation,
  PdfViewerComponent,
  Print,
  TextSearch,
  TextSelection,
  ThumbnailView,
  Toolbar,
} from '@syncfusion/ej2-react-pdfviewer';
import { Tooltip } from '@syncfusion/ej2-popups';
import ptBR from './pt-BR.json';
import {
  enableRipple,
  L10n,
  loadCldr,
  setCulture,
  registerLicense,
} from '@syncfusion/ej2-base';
import {
  toolbarSettings,
  annotationMouseOver,
  annotationMouseLeave,
} from './helper';
registerLicense(
  'ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkJiWH1dcHdUQWBZUEI='
);
enableRipple(true);
// Carrega as linguagens dos componentes syncfusion.
L10n.load(ptBR);
setCulture('pt');

export function PdfViewerFunctionComponent() {
  const [viewer, setViewer] = useState<PdfViewerComponent>();
  const viewerRef = useRef<PdfViewerComponent>();

  const tooltip: Tooltip = new Tooltip({
    mouseTrail: true,
    opensOn: 'Custom',
  });

  function loadRef() {
    viewerRef.current = viewer;
  }

  useEffect(() => {
    loadRef();
  }, [viewer]);

  return (
    <div>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        ref={(scope) => setViewer(scope)}
        id="container"
        documentPath="PDF_Succinctly.pdf"
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
        documentLoadFailed={(args: LoadFailedEventArgs) => {
          console.log('Falha no Load', args);
        }}
        toolbarSettings={toolbarSettings}
        style={{
          height: '100vh',
        }}
        interactionMode="Pan"
        isThumbnailViewOpen
        isCommandPanelOpen
        isAnnotationToolbarOpen
        hyperlinkOpenState="NewTab"
        dateTimeFormat={'yyyy-MM-dd HH:mm:ss'}
        theme={'bootstrap5-dark'}
        annotationMouseover={annotationMouseOver(viewer, tooltip)}
        annotationMouseLeave={annotationMouseLeave(tooltip)}
        stickyNotesSettings={{
          allowedInteractions: [
            AllowedInteraction.Move,
            AllowedInteraction.Select,
            AllowedInteraction.PropertyChange,
            AllowedInteraction.Delete,
          ],
        }}
        contextMenuSettings={{
          contextMenuItems: [
            ContextMenuItem.Properties,
            ContextMenuItem.Comment,
            ContextMenuItem.Delete,
          ],
        }}
      >
        <Inject
          services={[
            Toolbar,
            Magnification,
            Navigation,
            Annotation,
            LinkAnnotation,
            ThumbnailView,
            BookmarkView,
            TextSelection,
            TextSearch,
            Print,
          ]}
        />
      </PdfViewerComponent>
    </div>
  );
}

const root = createRoot(document.getElementById('sample'));
root.render(<PdfViewerFunctionComponent />);
