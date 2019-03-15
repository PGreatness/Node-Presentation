echo "Do you wish to install Express, Pug, and Nodemon from npm?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) make get; break;;
        No ) exit;;
    esac
done