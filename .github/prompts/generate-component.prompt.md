---
name: generate-component
description: This prompt is used to generate a new component based on a Figma design.
tools: ['context7/*', 'com.figma.mcp/mcp/*']
---

## Placeholders

| Placeholder | Description | Example |
| --- | --- | --- |
| {{figma_url}} | Figma design link containing the node to implement | https://www.figma.com/design/... |
| {{component_folder_tag}} | Target component folder, expressed as a #file tag | #file:cards |
| {{integration_component_tag}} | Existing component path that should be reused or integrated, expressed as a #file tag | #file:description-card.tsx |
| {{mock_data_path_tag}} | Path for storing mock data, expressed as a #file tag | #file:data.ts |
| {{global_styles_path_tag}} | Global styles file tag where shared text styles live | #file:globals.css |

## Prompt Body

Implement this design from Figma.
@{{figma_url}}
Create a new component and place it here {{component_folder_tag}}
Take into consideration that you might integrate the usage of {{integration_component_tag}} into the new brand component you are going to build.
If no integration component is needed, just ignore the {{integration_component_tag}} placeholder and don't mention it in the final implementation.

remember that mock data must be placed here:
{{mock_data_path_tag}}

And that text html element or tags should be unified and centralized by managing them into the {{global_styles_path_tag}}, keeping an focused eye on not duplicating styles already available

## Boilerplate Usage Message

When reusing this template, provide the following values:
- Figma design link: {{figma_url}}
- Destination component folder tag: {{component_folder_tag}}
- Existing component to integrate: {{integration_component_tag}}
- Mock data destination tag: {{mock_data_path_tag}}
- Global styles file tag: {{global_styles_path_tag}}

Replace each placeholder in the Prompt Body with the corresponding value before sending the request.
