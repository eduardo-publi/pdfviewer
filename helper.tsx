import { EmitType } from '@syncfusion/ej2-base';
import { Tooltip } from '@syncfusion/ej2-popups';
import {
  ToolbarSettingsModel,
  AnnotationMouseoverEventArgs,
  AnnotationMouseLeaveEventArgs,
} from '@syncfusion/ej2-react-pdfviewer';

export const toolbarSettings: ToolbarSettingsModel = {
  showTooltip: true,
  toolbarItems: [
    'UndoRedoTool',
    'PageNavigationTool',
    'MagnificationTool',
    'PanTool',
    'SelectionTool',
    'CommentTool',
    'AnnotationEditTool',
    'SearchOption',
    'PrintOption',
    'DownloadOption',
  ],
  annotationToolbarItems: [
    'HighlightTool',
    'UnderlineTool',
    'StrikethroughTool',
    'ColorEditTool',
    'OpacityEditTool',
    'AnnotationDeleteTool',
    // 'StampAnnotationTool',
    // 'HandWrittenSignatureTool',
    'InkAnnotationTool',
    'ShapeTool',
    'CalibrateTool',
    'StrokeColorEditTool',
    'ThicknessEditTool',
    'FreeTextAnnotationTool',
    'FontFamilyAnnotationTool',
    'FontSizeAnnotationTool',
    'FontStylesAnnotationTool',
    'FontAlignAnnotationTool',
    'FontColorAnnotationTool',
    'CommentPanelTool',
  ],
  formDesignerToolbarItems: [
    'TextboxTool',
    'PasswordTool',
    'CheckBoxTool',
    'RadioButtonTool',
    'DropdownTool',
    'ListboxTool',
    // 'DrawSignatureTool',
    'DeleteTool',
  ],
};

export function annotationMouseOver(tooltip: Tooltip) {
  const mouseOverEvent: EmitType<AnnotationMouseoverEventArgs> = (
    args: AnnotationMouseoverEventArgs
  ) => {
    console.log('annotationMouseover: ', args);
    let viewer = args.annotationBounds.controlParent;
    let noteToTooltip = viewer.annotationCollection.find(
      (a) => a.annotationId == args.annotationId
    );
    if (noteToTooltip && noteToTooltip.note) {
      tooltip.content = noteToTooltip.note;
      tooltip.appendTo('#container_pageDiv_' + (viewer.currentPageNumber - 1));
      tooltip.open();
      let tooltipElement: any =
        document.getElementsByClassName('e-tooltip-wrap')[0];
      tooltipElement.style.top = args.Y + 'px';
      tooltipElement.style.left = args.X + 'px';
    }
  };

  return mouseOverEvent;
}

export function annotationMouseLeave(tooltip: Tooltip) {
  const mouseLeaveEvent: EmitType<AnnotationMouseLeaveEventArgs> = (
    args: AnnotationMouseLeaveEventArgs
  ) => {
    console.log('annotationMouseLeave: ', args);
    tooltip.close();
  };

  return mouseLeaveEvent;
}
