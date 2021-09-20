from flask import jsonify
from . import routes
from get_json_data import get_json_data
from collections import Counter
from operator import itemgetter

  
@routes.route('/views')
def get_by_most_views():
    data = get_json_data()


    links_list = Counter(d['titleUrl'] for d in data if d.get('titleUrl'))
    sorted_links_list = sorted(links_list.items(), key=itemgetter(1), reverse=True)

    # titles_and_urls = []
    # for d in data:
    #     if d.get('titleUrl'):
    #         titles_and_urls.append({
    #             'title': d['title'],
    #             'titleUrl': d['titleUrl']
    #         })

    # for titles_and_url in titles_and_urls:
    #     for sorted_link in sorted_links_list:
    #         if titles_and_url['titleUrl'] == sorted_link[0]:
    #             titles_and_url['views'] = sorted_link[1]


    return jsonify(sorted_links_list)
