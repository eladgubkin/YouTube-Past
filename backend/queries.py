from graphene import Field, ObjectType, String


class Dashboard(ObjectType):
    pie_chart = String(file_data=String(default_value="This is Pie Chart"))
    word_cloud = String(file_data=String(default_value="This is the file data."))
    table = String(file_data=String(default_value="This is the file data."))
    timeline = String(file_data=String(default_value="This is the file data."))
    heatmap = String(file_data=String(default_value="This is the file data."))
    bar_chart_1 = String(file_data=String(default_value="This is the file data."))
    bar_chart_2 = String(file_data=String(default_value="This is the file data."))


    def resolve_pie_chart(root, info, file_data):
        data = file_data
        return data

    def resolve_word_cloud(root, info, file_data):
        data = file_data
        return data

    def resolve_table(root, info, file_data):
        data = file_data
        return data
        
    def resolve_timeline(root, info, file_data):
        data = file_data
        return data
    
    def resolve_heatmap(root, info, file_data):
        data = file_data
        return data

    def resolve_bar_chart_1(root, info, file_data):
        data = file_data
        return data

    def resolve_bar_chart_2(root, info, file_data):
        data = file_data
        return data

