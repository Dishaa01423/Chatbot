# Chatbot

This is a simple Flask application that serves a chatbot interface. Users can send messages to the chatbot, and the chatbot will respond with predefined responses.

## Demo

You can see a live demo of this application [here](https://chatbot-hzyv.onrender.com).

## Features

- Simple chatbot interface
- Real-time message sending and receiving
- Easy deployment on Render

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Python 3.7+
- pip (Python package installer)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/yourrepository.git
    cd yourrepository
    ```

2. **Create a virtual environment:**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

### Running the Application Locally

1. **Set the environment variables:**

    Create a `.env` file in the root directory and add any necessary environment variables. For example:
    ```env
    FLASK_ENV=development
    ```

2. **Run the Flask application:**

    ```bash
    flask run
    ```

    The application will be accessible at `http://127.0.0.1:5000/`.

### Project Structure


- `app.py`: Main application file.
- `backend.py`: Contains the chatbot logic.
- `templates/chatbot.html`: HTML template for the chatbot interface.
- `static/app.js`: JavaScript file for handling the frontend logic.
- `static/style.css`: CSS file for styling the chatbot interface.
- `requirements.txt`: List of Python dependencies.
- `Procfile`: Configuration for deploying on Render.

## Deployment

### Deploying to Render

1. **Create a new repository on GitHub and push your code.**

2. **Create a Render account and a new web service:**

    - Connect your GitHub repository.
    - Set the build and start commands.

    Build Command:
    ```
    pip install -r requirements.txt
    ```

    Start Command:
    ```
    gunicorn app:app
    ```

3. **Set environment variables:**

    Add any environment variables required by your application in the Render dashboard under the "Environment" section.

4. **Deploy:**

    Render will automatically build and deploy your application. Once deployed, your application will be accessible at the URL provided by Render.

## Contributing

If you have suggestions for improving the app, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
