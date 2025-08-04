# Network Traffic Simulator

## Overview

A full-stack web application that simulates network traffic in a telecommunications environment. The system provides real-time visualization of network topology, packet transmission, and traffic statistics through an interactive dashboard. Built with Node.js/Express backend and React frontend, featuring live data updates via WebSocket connections and comprehensive simulation controls.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based UI
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Real-time Communication**: WebSocket client for live data updates from simulation engine

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for type safety across the entire stack
- **Real-time Communication**: WebSocket server for broadcasting simulation updates
- **Data Storage**: In-memory storage implementation for fast access to simulation state
- **Simulation Engine**: Custom packet routing and network traffic simulation with configurable parameters

### Data Models
- **Network Topology**: Nodes (routers/switches) with position, queue status, and traffic generation rates
- **Links**: Connections between nodes with capacity, load metrics, and status indicators
- **Packets**: Individual data units with source, destination, routing path, and timing information
- **Simulation State**: Overall system status including runtime metrics and configuration

### Real-time Features
- **Live Network Visualization**: SVG-based topology display with color-coded status indicators
- **Dynamic Statistics**: Real-time updates of packet counts, latency, throughput, and loss rates
- **Interactive Controls**: Start/pause/reset simulation with adjustable traffic multipliers and update intervals
- **Status Monitoring**: Connection status indicators and error handling for WebSocket connectivity

### Simulation Logic
- **Packet Generation**: Configurable traffic generation rates per network node
- **Routing Algorithm**: Dijkstra's shortest path implementation for packet routing decisions
- **Queue Management**: FIFO packet queuing with configurable capacity limits per node
- **Load Balancing**: Dynamic load calculation and congestion detection across network links
- **Performance Metrics**: Latency tracking, throughput calculation, and packet loss monitoring

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity (configured but not actively used in current implementation)
- **drizzle-orm**: Database ORM with PostgreSQL dialect support
- **drizzle-kit**: Database migration and schema management tools

### UI Component Libraries
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives for React
- **@tanstack/react-query**: Server state management and data fetching library
- **lucide-react**: Icon library for consistent visual elements
- **class-variance-authority**: Utility for managing component variants with TypeScript support

### Styling and Design
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **clsx**: Utility for conditional CSS class names
- **tailwind-merge**: Smart merging of Tailwind CSS classes

### Real-time Communication
- **ws**: WebSocket implementation for Node.js server
- **Native WebSocket API**: Browser-based WebSocket client for real-time data updates

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### Validation and Type Safety
- **zod**: Runtime type validation and schema definition
- **drizzle-zod**: Integration between Drizzle ORM and Zod for type-safe database operations