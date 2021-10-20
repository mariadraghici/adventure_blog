from flask import Flask, render_template, url_for,jsonify,request,redirect


app= Flask(__name__)
app.config['SECRET_KEY'] = "g2h409fewpofwr08g9fejodsagvu8rh0dopsaoisdga89djoa"


@app.route("/",methods=["POST","GET"])
def index():
    return render_template("index.html")

@app.route("/profile",methods=["POST","GET"])
def profile():
    return render_template("profile.html")



@app.route("/user",methods=['POST','GET'])
def user():
    return "login"

@app.route("/register",methods=["POST","GET"])
def register():
    return "register"

@app.route("/login",methods=["POST","GET"])
def login():
    error = {
        "error":"bad method"
    }
    if request.method=="POST":
        user=request.form['user']
        password = request.form['pass']
        if user=="Bogdan" and password=="password":
            return redirect(url_for("/profile"))
        else:
            error['error']="bad password"
            return jsonify(error)
    else:
        return jsonify(error)


if __name__=='__main__':
    app.run()