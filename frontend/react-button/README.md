# React button task

Build functionality in a Buttons component using React. The component should
include Like and Dislike buttons with the requirements outlined below.

## Requirements

1. Like button:

    1. The component should render a **Like** button:

        - The button should have the `"like-button"` class.
        - The _initial_ number of likes should be set to 100.
        - The text displayed in the **Like** button should indicate the number of likes in the format `Likes | 100`.
        - The number of likes should be wrapped in a `<span>` element with the `className` set to `"likes-count"`.

    2. Clicking the **Like** button should:

        - Increase the number of displayed likes by 1.
        - Add the `"liked"` class to the **Like** `<button>` element.

    3. Clicking the **Like** button that has already been clicked should:

        - Decrease the number of displayed likes by 1.
        - Remove the `"liked"` class from the **Like** `<button>` element.

    4. Clicking the **Like** button whose associated **Dislike** button has already been clicked should:

        - Increase the number of displayed likes by 1.
        - Add the `"liked"` class to the **Like** `<button>` element.
        - Decrease the number of displayed dislikes by 1.
        - Remove the `"disliked"` class from the **Dislike** `<button>` element.

2. Dislike button:

    1. The component should render a **Dislike** button:

        - The button should have the `"dislike-button"` class.
        - The _initial_ number of dislikes should be set to 25.
        - The text displayed in the **Dislike** button should indicate the number of dislikes in the format `Dislikes | 25`.
        - The number of dislikes should be wrapped in a `<span>` element with the `className` set to `"dislikes-count"`.

    2. Clicking the **Dislike** button should:

        - Increase the number of displayed dislikes by 1.
        - Add the `"disliked"` class to the **Dislike** `<button>` element.

    3. Clicking the **Dislike** button that has already been clicked should:

        - Decrease the number of displayed dislikes by 1.
        - Remove the `"disliked"` class from the **Dislike** `<button>` element.

    4. Clicking the **Dislike** button whose associated **Like** button has already been clicked should:

        - Increase the number of displayed dislikes by 1.
        - Add the `"disliked"` class to the **Dislike** `<button>` element.
        - Decrease the number of displayed likes by 1.
        - Remove the `"liked"` class from the **Like** `<button>` element.

## Assumptions

- Functionality will be assessed.
- Styling will earn you bonus points.
