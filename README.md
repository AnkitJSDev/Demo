# Demo

createMultipleButtons fn - Create multiple dynamic buttons & attach a click event on them

numOfButtons : No of dynamic buttons to be created

Performance Consideration:

1. Dynamically created buttons are appended to button container. (No Page refresh)
2. Append button container to body. (Only 1 page refresh)
3. Add eventListener to button container. (Only 1 eventListener required instead of multiple events at button level - Event delegation)
