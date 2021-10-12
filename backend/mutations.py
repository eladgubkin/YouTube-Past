import graphene


class Person(graphene.ObjectType):
    name = graphene.String()
    age = graphene.Int()


class PersonInput(graphene.InputObjectType):
    name = graphene.String(required=True)
    age = graphene.Int(required=True)


class CreatePerson(graphene.Mutation):
    class Arguments:
        person_data = PersonInput(required=True)

    person = graphene.Field(Person)

    def mutate(root, info, person_data=None):
        person = Person(
            name=person_data.name,
            age=person_data.age
        )
        return CreatePerson(person=person)


class MyMutations(graphene.ObjectType):
    create_person = CreatePerson.Field()


class MyQueries(graphene.ObjectType):
    person = graphene.Field(Person)
