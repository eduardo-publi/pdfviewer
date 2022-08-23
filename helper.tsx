import { ToolbarSettingsModel } from '@syncfusion/ej2-react-pdfviewer';

export const toolbarSettings: ToolbarSettingsModel = {
  showTooltip: true,
  toolbarItems: [
    // 'UndoRedoTool',
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