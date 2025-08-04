Network Traffic Simulator for Telecom

A real-time network traffic simulator designed for telecommunications companies to visualize and analyze network performance. Built with Node.js/Express backend and React frontend, featuring live data updates via WebSocket connections.

Features

- **Real-time Network Visualization**: Interactive SVG-based topology display with 5 interconnected nodes (A, B, C, D, E)
- **Dynamic Statistics**: Live updates of packet counts, latency, throughput, and loss rates
- **Packet Routing**: Dijkstra's shortest path algorithm for optimal packet routing
- **Congestion Control**: Queue management with configurable capacity limits
- **Interactive Controls**: Start/pause/reset simulation with adjustable parameters
- **Performance Metrics**: Comprehensive analytics dashboard with exportable data
- **WebSocket Communication**: Real-time bidirectional communication between client and server

 Architecture

### Backend (Node.js + Express)
- RESTful API endpoints for simulation control
- WebSocket server for real-time data broadcasting
- In-memory storage for fast simulation state management
- Custom routing service with Dijkstra's algorithm
- Simulation engine with configurable parameters

### Frontend (React + TypeScript)
- Responsive web interface built with React and Tailwind CSS
- Real-time WebSocket client for live updates
- Interactive network topology visualization
- TanStack Query for efficient state management
- shadcn/ui component library for consistent design

### Network Topology
- **5 Nodes**: Routers A, B, C, D, E with configurable traffic generation rates
- **6 Links**: Bidirectional connections with specified capacities (60-120 pps)
- **Packet Flow**: Real-time packet routing with congestion detection
- **Status Indicators**: Color-coded status (active, congested, overloaded)

 Requirements Fulfilled

✅ **Simulation Engine**: Node.js/Express backend with packet transmission logic  
✅ **Network Topology**: 5 interconnected nodes with variable traffic loads  
✅ **Visualization Dashboard**: Responsive React interface with real-time updates  
✅ **Statistics Display**: Live metrics for nodes, links, and packet queues  
✅ **Algorithm Implementation**: Shortest path routing and congestion control  
✅ **Data Management**: In-memory storage with efficient data structures  

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js, WebSocket (ws), TypeScript
- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query
- **Build Tools**: Vite, TSX, ESBuild
- **Validation**: Zod for runtime type checking
- **Routing**: Wouter for client-side navigation

 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd network-traffic-simulator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## 🎮 Usage

1. **Start Simulation**: Click the "Start" button to begin packet generation and routing
2. **Adjust Parameters**: Use the traffic multiplier slider to increase/decrease packet generation rates
3. **Monitor Performance**: Watch real-time statistics and network topology updates
4. **Control Simulation**: Pause, resume, or reset the simulation as needed
5. **Export Data**: Download simulation data as JSON for further analysis

## 📊 Network Parameters

### Sample Node Configuration
| Node | Position | Traffic Rate | Max Queue |
|------|----------|--------------|-----------|
| A    | (150,100)| 20-70 pps    | 50        |
| B    | (350,100)| 20-70 pps    | 50        |
| C    | (150,300)| 20-70 pps    | 50        |
| D    | (550,200)| 20-70 pps    | 50        |
| E    | (650,300)| 20-70 pps    | 50        |

### Link Capacities
| Link | Capacity |
|------|----------|
| A-B  | 100 pps  |
| A-C  | 80 pps   |
| B-D  | 120 pps  |
| C-D  | 90 pps   |
| C-E  | 110 pps  |
| D-E  | 60 pps   |

## 🔧 API Endpoints

- `GET /api/network-stats` - Retrieve current network statistics
- `POST /api/simulation/control` - Control simulation (start/pause/reset)
- `WS /ws` - WebSocket connection for real-time updates

## 📈 Performance Metrics

The simulator tracks and displays:
- **Total Packets**: Cumulative packets generated
- **Packets Processed**: Successfully routed packets
- **Average Latency**: Mean packet transmission time
- **Throughput**: Packets processed per second
- **Packet Loss Rate**: Percentage of dropped packets
- **Queue Status**: Real-time queue utilization per node
- **Link Load**: Traffic percentage per network link

 Assignment Compliance

This project fulfills all requirements specified in the DigiPlusIT assignment:

1. ✅ **Simulation Engine**: Complete backend implementation with Node.js/Express
2. ✅ **Visualization Dashboard**: React frontend with real-time network display
3. ✅ **Data Management**: In-memory storage without complex database modeling
4. ✅ **Algorithm Implementation**: Shortest path routing and congestion control
5. ✅ **Deployment Ready**: Configured for cloud platform deployment

 License

This project is developed as part of an assignment for DigiPlusIT.

 Developer

Created within 3 hours as specified in the assignment requirements, demonstrating proficiency in:
- Full-stack web development
- Real-time systems design
- Network simulation algorithms
- Modern JavaScript/TypeScript development
- Responsive UI/UX design
