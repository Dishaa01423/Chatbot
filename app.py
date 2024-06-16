from flask import Flask, request, jsonify, render_template
from backend import Chatbot

app = Flask(__name__)
chatbot = Chatbot()

@app.route("/api/v1/chat", methods=["POST"])
def chat():
    if request.json:
        user_input = request.json.get("message")
        if user_input:
            response = chatbot.get_response(user_input)
            return jsonify({"response": response})
        else:
            return jsonify({"error": "No message provided"}), 400
    else:
        return jsonify({"error": "Invalid request format"}), 400

@app.errorhandler(404)
def page_not_found(e):
    return render_template('chatbot.html'), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
