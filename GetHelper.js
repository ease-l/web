/**
 * Created by user on 24.08.2016.
 */
class GetHelper{
    static getProjects(response) {
    var jsonob = JSON.parse(response.getData());
    var jsonar = JSON.projects;
    return jsonar;
}
    static getImages(response) {
    var jsonob = JSON.parse(response.getData());
    var jsonar = JSON.images;
    return jsonar;
}
    static getComments(response) {
        var jsonob = JSON.parse(response.getData());
        var jsonar = JSON.comments;
        return jsonar;
    }
}