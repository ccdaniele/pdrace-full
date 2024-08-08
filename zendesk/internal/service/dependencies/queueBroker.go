package service_dependencies

import (
	"zd/internal/eventQueue/rabbitmq"
)

type QueueBroker interface {
	Connect(string) error
	DeclareExchange(string, string) error
	RegisterExchangeRoute(string, string) rabbitmq.Route
	GracefulShutdown()
}
