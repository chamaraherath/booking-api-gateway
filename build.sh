
echo Enter Tag here:

read tag

docker build --build-arg NODE_ENV=development . -t booking-api-gateway:$tag -f Dockerfile

docker tag booking-api-gateway:$tag 209703339956.dkr.ecr.ap-southeast-1.amazonaws.com/booking-api-gateway:$tag

docker push 209703339956.dkr.ecr.ap-southeast-1.amazonaws.com/booking-api-gateway:$tag