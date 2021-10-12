from flask import Flask
from flask_cors import CORS
from flask_graphql import GraphQLView
from graphene import Schema
from mutations import MyMutations, MyQueries


app = Flask(__name__)
CORS(app)

schema = Schema(query=MyQueries, mutation=MyMutations)

app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
    'graphql',
    schema=schema,
    graphiql=True,
))


if __name__ == '__main__':
    app.run(debug=True)
